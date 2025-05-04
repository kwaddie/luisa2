import React, { useState, useEffect, useRef } from "react";
import { Grid, Avatar, Typography } from "@mui/material";
import BotAvatar from "../Assets/BotAvatar.svg";
import { WEBSOCKET_API } from "../utilities/constants";
import { useLanguage } from "../utilities/LanguageContext";
import { ALLOW_MARKDOWN_BOT } from "../utilities/constants";
import ReactMarkdown from "react-markdown";

const StreamingMessage = ({ initialMessage, setProcessing }) => {
  const [responses, setResponses] = useState([]);
  const ws = useRef(null);
  const messageBuffer = useRef("");
  const { language } = useLanguage();

  useEffect(() => {
    console.log("💡 WEBSOCKET_API from constants.js:", WEBSOCKET_API);

    if (!WEBSOCKET_API || WEBSOCKET_API === "undefined") {
      console.error("❌ WEBSOCKET_API is not defined. Check your environment variables in Amplify.");
      return;
    }

    ws.current = new WebSocket(WEBSOCKET_API);

    ws.current.onopen = () => {
      console.log("✅ WebSocket Connected");
      ws.current.send(
        JSON.stringify({
          action: "sendMessage",
          prompt: initialMessage,
          Language: language,
        })
      );
    };

    ws.current.onmessage = (event) => {
      try {
        messageBuffer.current += event.data;
        const parsedData = JSON.parse(messageBuffer.current);

        if (parsedData.type === "end") {
          setProcessing(false);
          console.log("✅ End of conversation");
        }

        if (parsedData.type === "delta") {
          setResponses((prev) => [...prev, parsedData.text]);
        }

        messageBuffer.current = "";
      } catch (e) {
        if (e instanceof SyntaxError) {
          console.log("⏳ Incomplete JSON, waiting for more data...");
        } else {
          console.error("❌ Error processing message: ", e);
          messageBuffer.current = "";
        }
      }
    };

    ws.current.onerror = (error) => {
      console.error("❌ WebSocket Error: ", error);
    };

    ws.current.onclose = (event) => {
      if (event.wasClean) {
        console.log(`🔒 WebSocket closed cleanly, code=${event.code}, reason=${event.reason}`);
      } else {
        console.warn("⚠️ WebSocket Disconnected unexpectedly");
      }
    };

    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, [initialMessage, setProcessing]);

  return (
    <Grid container direction="row" justifyContent="flex-start" alignItems="flex-end">
      <Grid item>
        <Avatar alt="Bot Avatar" src={BotAvatar} />
      </Grid>
      <Grid item className="botMessage" sx={{ backgroundColor: (theme) => theme.palette.background.botMessage }}>
        <Typography variant="body2" sx={{ "& li": { color: "black !important" } }}>
          <ReactMarkdown>{responses.join("")}</ReactMarkdown>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default StreamingMessage;

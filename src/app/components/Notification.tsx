"use client";
import { useEffect } from "react";
import { useNotificationStore } from "../../store/useNotificationStore";

export default function Notification() {
  const { message, type, hideNotification } = useNotificationStore();

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => hideNotification(), 4000);
      return () => clearTimeout(timer);
    }
  }, [message, hideNotification]);

  if (!message) return null;

  const bgColor = type === "success" ? "green" : "red";

  return (
    <div
      style={{
        position: "fixed",
        top: 20,
        right: 20,
        backgroundColor: bgColor,
        color: "white",
        padding: "10px 20px",
        borderRadius: "8px",
        zIndex: 1000,
      }}
    >
      {message}
    </div>
  );
}

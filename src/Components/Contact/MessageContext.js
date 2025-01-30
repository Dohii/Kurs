import React, { createContext, useContext, useState, useEffect } from "react";

const MessageContext = createContext({
  messages: [],
  addMessage: () => {},
});

export const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState(() => {
    if (typeof window !== "undefined") {
      const savedMessages = localStorage.getItem("contactMessages");
      return savedMessages ? JSON.parse(savedMessages) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("contactMessages", JSON.stringify(messages));
  }, [messages]);

  const addMessage = (message) => {
    setMessages((prev) => [...prev, message]);
  };

  return (
    <MessageContext.Provider value={{ messages, addMessage }}>
      {children}
    </MessageContext.Provider>
  );
};

export const useMessage = () => {
  const context = useContext(MessageContext);

  return context;
};

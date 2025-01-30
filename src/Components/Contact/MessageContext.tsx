
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Message {
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp?: string;
}

interface MessageContextType {
  messages: Message[];
  addMessage: (message: Message) => void;
}

const MessageContext = createContext<MessageContextType>({
  messages: [],
  addMessage: () => {},
});

export const MessageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>(() => {
    if (typeof window !== 'undefined') {
      const savedMessages = localStorage.getItem('contactMessages');
      return savedMessages ? JSON.parse(savedMessages) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('contactMessages', JSON.stringify(messages));
  }, [messages]);

  const addMessage = (message: Message) => {
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
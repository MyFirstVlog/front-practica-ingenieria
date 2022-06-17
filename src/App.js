import React from "react";
import { AuthProvider } from "./module/auth/AuthContext";
import { AppRouter } from "./module/router/AppRouter";

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;

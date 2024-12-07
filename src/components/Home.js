import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";


const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="container-fluid p-0 d-flex justify-content-center align-items-center vh-100 bg-light">
      {/* Rectangle Box */}
      <div className="rectangle-box d-flex flex-column justify-content-between shadow-lg">
        {/* Header Section */}
        <header className="bg-primary text-white text-center py-3">
          <h1 className="display-4">Welcome</h1>
          <p className="lead">User Dashboard</p>
        </header>

        {/* Main Content */}
        <main className="flex-grow-1 p-4 d-flex flex-column justify-content-center align-items-center">
          <h2 className="mb-4">Welcome</h2>
          {user && (
            <p className="fs-5">
              <strong>Email:</strong> {user.email}
            </p>
          )}
          <div className="d-grid gap-2 mt-4" style={{ width: "200px" }}>
            <Button variant="primary" size="lg" onClick={handleLogout}>
              Log out
            </Button>
          </div>
        </main>

        {/* Footer Section */}
        <footer className="bg-dark text-white text-center py-3">
          <p className="mb-1">© 2024 User Dashboard</p>
          <p>
            Need help?{" "}
            <a href="/contact" className="text-white text-decoration-underline">
              Contact Us
            </a>
          </p>
        </footer>
      </div>
    </div>
    </>
  );
};

export default Home;

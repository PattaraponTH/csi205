import React from "react";
import profile from  '../assets/Home/profile.gif'

const Home = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f0f0f0", // พื้นหลังโดยรวมอ่อน
        padding: "2rem",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      {/* หัวข้อ */}
      <h2
        className="text-center fw-bold mb-4"
        style={{ color: "#222", fontSize: "2rem" }}
      >
        HOME PAGE
      </h2>

      {/* Outer blog card ครอบทั้งสองคอลัมน์ */}
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          borderRadius: "20px",
          padding: "2rem",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          display: "flex",
          flexWrap: "wrap",
          gap: "0.3rem",
          alignItems: "flex-start",
        }}
      >
        {/* ซ้าย: Inner blog card */}
        <div
          style={{
            flex: "2 1 170px", // ขยายฝั่งซ้าย
            backgroundColor: "#ffffff",
            borderRadius: "15px",
            border: "1px solid #ccc",
            padding: "1.5rem",
            textAlign: "left",
          }}
        >
          <img
            src={profile}
            // "./image/profile.gif"
            alt="นักศึกษา"
            style={{
              width: "350px",
              height: "360px",
              objectFit: "cover",
              // borderRadius: "50%",
              border: "4px solid #ffffffff",
              marginBottom: "1rem",
            }}
          />
          <h3 style={{ color: "#333", marginBottom: "0.5rem" }}>
            67171599 Pattarpon Mairon
          </h3>
          <h5 style={{ color: "#555", margin: "0.25rem 0" }}>
            Computer Science and Software Development Innovation Dept. (CSI)
          </h5>
          <h5 style={{ color: "#555", margin: "0.25rem 0" }}>
            School of Information Technology (SIT)
          </h5>
          <h5 style={{ color: "#555", margin: "0.25rem 0" }}>
            Sripathum University (SPU)
          </h5>
        </div>

        {/* เส้นแบ่งตรงกลาง */}
        <div
          style={{
            width: "2px",
            backgroundColor: "#ccc",
          }}
        ></div>

        {/* ขวา: Inner blog card */}
        <div
          style={{
            flex: "1 1 400px", // ขนาดฝั่งขวาเท่าเดิม
            backgroundColor: "#ffffff",
            borderRadius: "15px",
            border: "1px solid #ccc",
            padding: "1.5rem",
            textAlign: "left",
            marginLeft: "auto", // ชิดขวา
          }}
        >
          {/* ภาษาอังกฤษ */}
          <p
            style={{
              marginTop: "0.5rem",
              color: "#555",
              fontSize: "1rem",
              lineHeight: "1.5",
            }}
          >
            Hi, I am a <strong>Frontend Developer</strong> passionate about
            building visually appealing and user-friendly websites and web
            applications. I enjoy turning designs into responsive, interactive,
            and efficient web interfaces using modern technologies like{" "}
            <strong>React</strong>, <strong>HTML</strong>, <strong>CSS</strong>,{" "}
            <strong>JavaScript</strong>, and frameworks/libraries such as{" "}
            <strong>Material UI</strong> and <strong>Bootstrap</strong>. I also
            use <strong>GitHub</strong> for version control and{" "}
            <strong>Icon libraries</strong> to enhance UI design.
          </p>

          {/* ข้อความสรุป / CTA */}
          <p
            style={{
              color: "#777",
              fontSize: "0.9rem",
              marginTop: "1.5rem",
            }}
          >
            Welcome to Home page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

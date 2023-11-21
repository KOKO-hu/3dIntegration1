import { useState } from "react";
import { useCustomisation } from "../context/customisation";

export const Configuration = () => {
  const { materiel, setMateriel,faceColor, setFaceColor ,brasColor, setBrasColor } = useCustomisation();
  console.log(faceColor)
  const [face, setFace] = useState(["#154360", "#943126", "#873600"]);
  const [bras, setBras] = useState(["#5F6A6A", "#CA6F1E", "#1E8449"]);
  return (
    <div
      className="container"
      style={{
        position: "fixed",
        right: "24px",
        width: "251px",
        bottom: "179px",
      }}
    >
      <div className="d-flex">
        <div className="mx-2">
          <div onClick={() => setMateriel("face")}>
            <h5 style={{ color: "white" }}>Face</h5>
          </div>
          {face.map((face, key) => (
            <div
            key={key}
            onClick={()=>setFaceColor(face)}
              style={{
                width: "30px",
                height: "30px",
                padding: "2px",
                backgroundColor: face,
                margin: "10px",
              }}
            ></div>
          ))}
        </div>
        <div className="mx-2">
          <div onClick={() => setMateriel("bras")}>
            <h5 style={{ color: "white" }}>Bras</h5>
          </div>
          {bras.map((bras, key) => (
            <div
            key={key}
            onClick={()=>setBrasColor(bras)}
              style={{
                width: "30px",
                height: "30px",
                padding: "2px",
                backgroundColor: bras,
                margin: "10px",
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

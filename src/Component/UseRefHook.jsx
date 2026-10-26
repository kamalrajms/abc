import React, { useEffect, useRef, useState } from "react";

export default function UseRefHook() {
  // eg1
  const inputRef = useRef();
  const focusinput = () => {
    inputRef.current.focus();
  };
  //   eg2
  const [sec, setSec] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    inputRef.current = setInterval(() => {
      setSec((prev) => prev + 1);
    }, 500);
    return () => clearInterval(inputRef.current);
  }, []);
  // eg3
  const [newProduct, setNewProduct] = useState(true);
  const [imgURL, setImgURL] = useState("");

  const imgRef = useRef(0);
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setImgURL(preview);
      setNewProduct(false);
    }
  };

  return (
    <div>
      <nav>
        <input type="text" ref={inputRef} />
        <button onClick={focusinput}>Focus input</button>
      </nav>
      <nav>
        <h2>sec:{sec}</h2>
        <button onClick={() => clearInterval(inputRef.current)}>stop</button>
      </nav>
      <nav>
        <input type="file" ref={imgRef} hidden onChange={handleImage} />
        {newProduct ? (
          <div
            className="image"
            onClick={() => {
              imgRef.current.click();
            }}
          >
            uploading image..
          </div>
        ) : (
          <img className="org-imr" src={imgURL} />
        )}
      </nav>
    </div>
  );
}

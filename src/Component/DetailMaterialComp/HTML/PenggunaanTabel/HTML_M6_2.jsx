const HTML_M6_2 = () => {
  return (
    <>
      <h1 className="font-semibold text-2xl">MATERI 2 - Menggabungkan Tabel</h1>
      <div className="py-5 text-black flex flex-col gap-y-4 font-normal">
        <p className="opacity-70">
          Ada kalanya kita membuat tabel dengan menggabungkan baris, ataupun
          kolom. Berikut ini contoh tabel yang menggabungkan baris :
        </p>
        <br />
        <div className="w-10/12 mx-auto p-2 opacity-100">
          <img
            className="rounded-lg mx-auto w-10/12 drop-shadow-[0px_8px_10px_rgba(0,0,0,0.4)]"
            src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1687327673/M6_G9_mo00ps.png"
            alt="MissingIMG"
          />
        </div>
        <div className="opacity-70">
          <p>
            Untuk membuat tabel seperti diatas maka terdapat atribut di dalam
            tabel yang digunakan untuk membuat tabel seperti diatas. Atribut
            yang digunakan untuk menggabungkan sel dalam tabel antara lain:
          </p>
          <br />
          <p>
            - <b>Rowspan</b>: digunakan untuk menggabungkan baris
          </p>
          <p>
            - <b>Colspan</b>: digunakan untuk menggabungkan kolom
          </p>
          <br />
          <p>
            Jadi untuk membuat tabel seperti diatas adalah sebagai berikut:{" "}
          </p>
        </div>
        <div className="w-10/12 mx-auto p-2 opacity-100">
          <img
            className="rounded-lg mx-auto w-8/12 drop-shadow-[0px_8px_10px_rgba(0,0,0,0.4)]"
            src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1687327894/M6_G10_kcg11f.png"
            alt="MissingIMG"
          />
        </div>
      </div>
    </>
  );
};

export default HTML_M6_2;

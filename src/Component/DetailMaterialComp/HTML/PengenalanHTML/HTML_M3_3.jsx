const HTML_M3_3 = () => {
  return (
    <>
      <h1 className="font-semibold text-2xl">MATERI 3 - Tag HTML Dasar</h1>
      <div className="py-5 text-black opacity-70 flex flex-col gap-y-4 font-normal">
        <p>
          Ada banyak tag HTML yang dapat digunakan dalam pembuatan halaman web.
          Berikut adalah beberapa tag HTML dasar yang sering digunakan:
        </p>
        <div>
          <ol type="1">
            <li>
              <div>
                <p className="font-semibold text-lg mt-2">
                  1. {`<h1> sampai <h6>`}
                </p>
                <p className="pl-5">
                  tag ini digunakan untuk menentukan judul atau heading dari
                  sebuah halaman web.
                </p>
              </div>
            </li>
            <li>
              <div>
                <p className="font-semibold text-lg mt-2">2. {`<p>`}</p>
                <p className="pl-5">
                  tag ini digunakan untuk menentukan paragraf teks.
                </p>
              </div>
            </li>
            <li>
              <div>
                <p className="font-semibold text-lg mt-2">3. {`<a>`}</p>
                <p className="pl-5">
                  tag ini digunakan untuk menentukan tautan atau link ke halaman
                  web lain.
                </p>
              </div>
            </li>
            <li>
              <div>
                <p className="font-semibold text-lg mt-2">4. {`<img>`}</p>
                <p className="pl-5">
                  tag ini digunakan untuk menampilkan gambar pada halaman web.
                </p>
              </div>
            </li>
            <li>
              <div>
                <p className="font-semibold text-lg mt-2">
                  5. {`<ul>, <ol> dan <li>`}
                </p>
                <p className="pl-5">
                  tag ini digunakan untuk membuat daftar atau list.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default HTML_M3_3;

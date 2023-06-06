const HTML_M3_4 = () => {
  return (
    <>
      <h1 className="font-semibold text-2xl">MATERI 4 - Atribut HTML</h1>
      <div className="py-5 text-black opacity-70 flex flex-col gap-y-4 font-normal">
        <p>
          Atribut HTML digunakan untuk memberikan informasi tambahan tentang
          elemen HTML. Berikut adalah beberapa atribut HTML yang sering
          digunakan:
        </p>
        <div>
          <ol type="1">
            <li>
              <div>
                <p className="font-semibold text-lg mt-2">1. {`class`}</p>
                <p className="pl-5">
                  atribut ini digunakan untuk memberikan nama kelas pada elemen
                  HTML.
                </p>
              </div>
            </li>
            <li>
              <div>
                <p className="font-semibold text-lg mt-2">2. {`id`}</p>
                <p className="pl-5">
                  atribut ini digunakan untuk memberikan identifikasi unik pada
                  elemen HTML.
                </p>
              </div>
            </li>
            <li>
              <div>
                <p className="font-semibold text-lg mt-2">3. {`href`}</p>
                <p className="pl-5">
                  atribut ini digunakan untuk menentukan alamat tautan atau link
                  pada tag {`<a>`}.
                </p>
              </div>
            </li>
            <li>
              <div>
                <p className="font-semibold text-lg mt-2">4. {`src`}</p>
                <p className="pl-5">
                  atribut ini digunakan untuk menentukan sumber gambar pada tag{" "}
                  {`<img>`}.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default HTML_M3_4;

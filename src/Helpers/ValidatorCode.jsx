export const ValidatorCode = (htmlCode, cssCode, jsCode, challengeId) => {
  console.log(challengeId);
  // Persyaratan kode CSS dan JavaScript
  const requiredCSS = "background-color: blue;";
  const requiredJS = "addEventListener";
  const requiredElements = [
    { element: "p", value: "INI P" },
    { element: "td", value: "INI TABLE" },
    { element: "i", value: "MIRING" },
    { element: "b", value: "HBD" },
  ];
  const requiredAttributes = [
    { att: "border", value: "2" },
    { att: "cellpadding", value: "0" },
    { att: "cellspacing", value: "0" },
  ];

  // Buat elemen temporary untuk melakukan parsing kode HTML
  const tempElement = document.createElement("div");
  tempElement.innerHTML = htmlCode;

  // Cek keberadaan elemen-elemen yang harus ada
  const missingElements = requiredElements.filter((requiredElement) => {
    const element = tempElement.querySelector(requiredElement.element);
    return (
      !element ||
      (requiredElement.value &&
        element.textContent.trim() !== requiredElement.value)
    );
  });

  // Cek keberadaan atribut-atribut yang harus ada dan nilai-nilai yang sesuai
  const missingAttributes = requiredAttributes.filter((requiredAttribute) => {
    const element = tempElement.querySelector(`[${requiredAttribute.att}]`);
    return (
      !element ||
      element.getAttribute(requiredAttribute.att) !== requiredAttribute.value
    );
  });

  // Cek keberadaan kode CSS dan JavaScript dalam kode yang diberikan oleh pengguna
  const hasRequiredCSS = cssCode.includes(requiredCSS);
  const hasRequiredJS = jsCode.includes(requiredJS);

  // Tampilkan pesan hasil validasi
  if (
    missingElements.length > 0 ||
    missingAttributes.length > 0 ||
    !hasRequiredCSS ||
    !hasRequiredJS
  ) {
    console.log("Error: Halaman web tidak memenuhi kriteria studi kasus.");

    if (missingElements.length > 0) {
      console.log("Elemen yang tidak ditemukan: ", missingElements);
    }

    if (missingAttributes.length > 0) {
      console.log(
        "Atribut yang tidak ditemukan atau nilai yang tidak sesuai: ",
        missingAttributes
      );
    }

    if (!hasRequiredCSS) {
      console.log("Kode CSS tidak memenuhi persyaratan.");
    }

    if (!hasRequiredJS) {
      console.log("Kode JavaScript tidak memenuhi persyaratan.");
    }
  } else {
    console.log("Selamat, halaman web memenuhi kriteria studi kasus!");
    console.log("Kode memenuhi persyaratan.");
  }
};

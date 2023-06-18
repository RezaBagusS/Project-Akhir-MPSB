export const ValidatorCode = (htmlCode, cssCode, jsCode, challenge) => {
  // console.log(challenge);
  // Persyaratan kode CSS dan JavaScript
  const requiredCSS = challenge?.requiredCSS;
  const requiredJS = challenge?.requiredJS;
  const requiredElements = challenge?.requiredElements;
  const requiredAttributes = challenge?.requiredAttributes;

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
  if (htmlCode === "") {
    let errMessage = [];

    errMessage.push(`Tambahkan kode HTML sesuai dengan ketentuan studi kasus.`);

    return errMessage;
  }

  if (
    missingElements.length > 0 ||
    missingAttributes.length > 0 ||
    !hasRequiredCSS ||
    !hasRequiredJS
  ) {
    console.log("Error: Halaman web tidak memenuhi kriteria studi kasus.");
    let errMessage = [];

    if (missingElements.length > 0) {
      console.log("Elemen yang tidak ditemukan: ", missingElements);
      missingElements.forEach((element) => {
        element.value
          ? errMessage.push(
              `Tambahkan elemen ${element.element} dengan isi ${element.value}`
            )
          : errMessage.push(`Tambahkan elemen ${element.element}`);
      });
      // errMessage.push(`Tambahkan elemen ${missingElements[0].element} dengan isi ${missingElements[0].value}`);
    }

    if (missingAttributes.length > 0) {
      // console.log(
      //   "Atribut yang tidak ditemukan atau nilai yang tidak sesuai: ",
      //   missingAttributes
      // );
      errMessage.push(
        `Tambahkan atribut ${missingAttributes[0].att} dengan nilai ${missingAttributes[0].value}`
      );
    }

    if (requiredCSS.length > 0) {
      // console.log("Kode CSS tidak memenuhi persyaratan.");
      hasRequiredCSS &&
        errMessage.push(
          `Tambahkan style css sesuai dengan ketentuan studi kasus.`
        );
    }

    if (requiredJS.length > 0) {
      // console.log("Kode JavaScript tidak memenuhi persyaratan.");
      hasRequiredJS &&
        errMessage.push(
          `Tambahkan kode JavaScript yang sesuai dengan ketentuan studi kasus. Silahkan cek code editor dan previewnya kembali.`
        );
    }

    return errMessage;
  } else {
    if (htmlCode === "") {
      let errMessage = [];
      errMessage.push(`Tambahkan kode HTML sesuai dengan ketentuan studi kasus.`);
      return errMessage;
    }
      
    console.log("Selamat, halaman web memenuhi kriteria studi kasus!");
    console.log("Kode memenuhi persyaratan.");
    return false;
  }
};

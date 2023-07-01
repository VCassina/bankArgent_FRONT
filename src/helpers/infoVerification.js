function editInfoVerification(information) {
  const minLength = 4;
  const maxLength = 16;
  const forbiddenChars = /[;:{}[\]'"()/\\]/;

  if (forbiddenChars.test(information)) {
    console.log("1 detected")
    return 1;
  }
  if (
    typeof information !== "string" ||
    information.length < minLength ||
    information.length > maxLength
  ) {
    console.log(information, "2 detected")
    return 2;
  }

  return 0;
}

export default editInfoVerification;

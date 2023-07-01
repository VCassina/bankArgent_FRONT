function editInfoVerification(information) {
  const minLength = 4;
  const maxLength = 16;
  const forbiddenChars = /[;:{}[\]'"()/\\]/;

  if (forbiddenChars.test(information)) {
    return 1;
  }
  if (
    typeof information !== "string" ||
    information.length < minLength ||
    information.length > maxLength
  ) {
    return 2;
  }

  return 0;
}

export default editInfoVerification;

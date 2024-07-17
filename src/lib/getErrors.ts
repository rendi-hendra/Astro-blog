export function getErrorMessages(errorObject: {
  [x: string]: { _errors: any[] };
}) {
  const errorMessages: { field: string; message: any }[] = [];

  for (const key in errorObject) {
    if (errorObject[key]._errors && errorObject[key]._errors.length > 0) {
      errorObject[key]._errors.forEach((message: any) => {
        errorMessages.push({ field: key, message });
      });
    }
  }

  return errorMessages;
}

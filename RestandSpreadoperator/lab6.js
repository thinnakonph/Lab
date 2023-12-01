function profileInfo() {
    const firstName = prompt('your firstname :');
    const lastName = prompt('your lastname :');
    const hobbiesInput = prompt('hobbies, separated by commas:');
    const hobbies = hobbiesInput.split(',').map(hobby => hobby.trim());
    const numOfHobbies = hobbies.length;
    return {
      firstName,
      lastName,
      hobbies,
      numOfHobbies
    };
  }
  const profile = profileInfo();
  console.log(profile);
  
  
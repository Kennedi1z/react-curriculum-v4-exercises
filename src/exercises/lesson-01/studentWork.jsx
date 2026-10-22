//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  const name = "Kennedi Wilson";
  const age = 27;
  const Hobbies = ["Reading", "Watching Movies", "Playing Video Games"];
  return (
    <div>
      {/* add JSX here */}
      <h1>{name}</h1>
      <p>Hello, my name is {name}. I am {age} years old and I'm in the Code the dream course for react.</p>
      <p>Age: {age}</p>
      <h2>Hobbies:</h2>
      <ul>
        {Hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}

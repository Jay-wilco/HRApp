const Person = (props) => {
  const getYears = (startDate) => {
    const start = new Date(startDate);
    const now = new Date();
    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }
    if (years < 0) {
      years = 0;
    }

    return { years, months };
  };
  const { years, months } = getYears(props.startDate);

  const celebrate = years > 0 && years % 5 === 0 && months === 0;
  const probation = years === 0 && months <= 6;

  const animalEmoji = (animal) => {
    const animalMap = {
      Lion: "🦁",
      Tiger: "🐯",
      Rabbit: "🐰",
      Fox: "🦊",
      Wolf: "🐺",
      Butterfly: "🦋",
      Horse: "🐴",
      Penguin: "🐧",
      Raccoon: "🦝",
      Camel: "🐪",
    };

    return animalMap[animal] || animal;
  };

  const emoji = animalEmoji(props.animal);

  return (
    <div className="person">
      <p>
        <strong>Id:</strong> {props.id}
      </p>
      <p>
        <strong>Name:</strong> {props.name}
      </p>
      <p>
        <strong>Title:</strong> {props.title}
      </p>
      <p>
        <strong>Salary:</strong> {props.salary}
      </p>
      <p>
        <strong>Phone:</strong> {props.phone}
      </p>
      <p>
        <strong>Email:</strong> {props.email}
      </p>
      <p>
        <strong>Animal: </strong>
        {emoji}
      </p>
      <p>
        <strong>Start Date: </strong>
        {props.startDate}
      </p>
      <p>
        <strong>Years Worked: </strong>
        {`${years} years and ${months} months`}
      </p>
      {celebrate && <p>🎉 Schedule recognition meeting.</p>}
      {probation && <p>🔔 Schedule probation review.</p>}
      <p>
        <strong>Location: </strong>
        {props.location}
      </p>
      <p>
        <strong>Department: </strong>
        {props.department}
      </p>
      <p>
        <strong>Skills: </strong>
        {props.skills.join(", ")}
      </p>
    </div>
  );
};
export default Person;

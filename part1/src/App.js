const Header = (props) => {
  // Header takes care of rendering the name of the course */
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  // Content renders the parts and their number of exercises
  
  return (
     <Part key = {props.content[0].part} value = {props.content[0].exercises}/>
     <Part key = {props.content[1].part} value = {props.content[1].exercises}/>
     <Part key = {props.content[2].part} value = {props.content[2].exercises}/>
  )
};

const Part = (props) => {
  return (
      <p> {props.key} {props.exercises} </p>
  )
}

const Total = (props) => {
  // Total renders the total number of exercises
  return (
    <div>
      <p>
        {props.total}
      </p>
    </div>

  )
};


// Inside App takes the variable names and pass into three components
// variables become props and format them into approriate tags

const App = () => {
  const course = 'Half Stack application development'
  const content = [
    { part: 'Fundamentals of React', exercises: 10 },
    { part: 'Using props to pass data', exercises: 7 },
    { part: 'State of a component', exercises: 14 },
  ]
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  return (
    <div>
      <Header course={course} />
      <Content content={content} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App
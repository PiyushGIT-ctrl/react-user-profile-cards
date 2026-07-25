import Card from './Components/Card';

const App = () => {

  const users = [
    {
      id: 1,
      name: "Sophia James",
      image: "https://i.pinimg.com/1200x/c4/31/8e/c4318edd3ab05074486c35ccdeec308f.jpg",
      description: "Product Designer who focuses on simplicity & usability.",
      followers: 324,
      tasksDone: 48,
      verified: true,
    },
    {
      id: 2,
      name: "Liam Carter",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
      description: "Frontend Developer passionate about React and UI design.",
      followers: 812,
      tasksDone: 103,
      verified: false,
    },
    {
      id: 3,
      name: "Emma Wilson",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
      description: "UX Researcher turning user feedback into better products.",
      followers: 540,
      tasksDone: 67,
      verified: true,
    },
    {
      id: 4,
      name: "Noah Brown",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500",
      description: "Backend Engineer building scalable cloud applications.",
      followers: 290,
      tasksDone: 41,
      verified: false,
    },
    {
      id: 5,
      name: "Olivia Taylor",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500",
      description: "Digital Illustrator with a love for minimal aesthetics.",
      followers: 1204,
      tasksDone: 156,
      verified: true,
    },
  ];
  console.log(users);
  return (
    <div className='Parent'>
      {users.map(function(elem, idx){
        return <div key={idx}>
          <Card name={elem.name} profilephoto={elem.image} userdesc={elem.description} follow={elem.followers} tasks={elem.tasksDone}/>
        </div>
      })}
    </div>
  )
}

export default App 
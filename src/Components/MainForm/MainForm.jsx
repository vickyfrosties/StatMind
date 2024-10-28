import MainMenu from "../../Containers/Menu/MainMenu";

const MainForm = () => {

  return (
    <>
      <h3>I feel...</h3>
      <div>
        <button>Happy</button>
        <button>Sad</button>
        <button>Angry</button>
        <button>Disgust</button>
        <button>Surprised</button>
        <button>Overwhelmed</button>
        <button>Anxious</button>
      </div>
      <MainMenu />
    </>
  );
};

export default MainForm;
import Counter from "./Header";
import Container from "./Container";
import DisplayCounter from "./DisplayCounter";
import Controls from "./Controls";
import PrivacyMessage from "./PrivacyMessage";
import { useSelector } from "react-redux";
import MotivQoutes from "./MotivQoutes";

const AppRedux = () => {
  const privacy = useSelector((store) => store.privacy);

  return (
    <center>
      <div className="px-4 py-5 my-5 ">
        <Container>
          <Counter></Counter>
          <div className="col-lg-6 mx-auto">
            {privacy ? (
              <PrivacyMessage></PrivacyMessage>
            ) : (
              <DisplayCounter></DisplayCounter>
            )}
            <Controls></Controls>
          </div>
        </Container>
        <i>Its based on Only-Redux(Not redux-toolkit)</i>
      </div>

      <MotivQoutes />
    </center>
  );
};

export default AppRedux;

import styles from "./page.module.css";
import Profile from "@/app/components/Profile";
import Greeting from "@/app/components/Greeting";
import Border from "@/app/components/Border";
import NestedComponent from "@/app/components/NestedComponent";
import Container from "@/app/components/Container";

export default function Home() {
    let profile1 = {
        name: 'John',
        image: 'https://randomuser.me/api/portraits/women/90.jpg'
    }
    let profile2 = {
        name: 'Lemma',
        image: 'https://randomuser.me/api/portraits/men/60.jpg'
    }
  return (
    <div className={styles.page}>
        {/*<h3>Hello World</h3>*/}
        {/*<Profile profile={profile1} />*/}
        {/*<Greeting name={"Thazin"} />*/}
        {/*<Border>*/}
        {/*    <h1>Hello</h1>*/}
        {/*    <Profile profile={profile2} size={70} />*/}
        {/*</Border>*/}
        {/*<NestedComponent*/}
        {/*    style={ {*/}
        {/*        backgroundColor: "blue",*/}
        {/*        color: 'white'*/}
        {/*    } }*/}
        {/*    label={ "Some message" }*/}
        {/*    size={100} />*/}
        <Container style={{
            backgroundColor: 'blue',
            color: 'white',
        }}>
            Customize Container
        </Container>
    </div>
  );
}

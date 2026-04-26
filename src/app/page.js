import styles from "./page.module.css";
import Profile from "@/app/components/Profile";
import Greeting from "@/app/components/Greeting";
import Border from "@/app/components/Border";
import NestedComponent from "@/app/components/NestedComponent";
import Container from "@/app/components/Container";
import UserAccount from "@/app/components/conditional_render/UserAccount";
import Conditional from "@/app/components/conditional_render/Conditional";
import ItemList from "@/app/components/list/ItemList";
import TodoListDemo from "@/app/components/list/TodoListDemo";
import CustomButtonDemo from "@/app/components/CustomButtonDemo";
import PropagationDemo from "@/app/components/PropagationDemo";
import Counter from "@/app/components/Counter";
import TabDemo from "@/app/components/tab/TabDemo";
import StateProblem1 from "@/app/components/state/StateProblem1";
import UpdateObject from "@/app/components/state/UpdateObject";
import UpdateArray from "@/app/components/state/UpdateArray";
import UpdateArrayDemo from "@/app/components/state/UpdateArrayDemo";

export default function Home() {
    let profile1 = {
        name: 'John',
        image: 'https://randomuser.me/api/portraits/women/90.jpg'
    }
    let profile2 = {
        name: 'Lemma',
        image: 'https://randomuser.me/api/portraits/men/60.jpg'
    }
    console.log('page.js render');
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
        {/*<Container style={{*/}
        {/*    backgroundColor: 'blue',*/}
        {/*    color: 'white',*/}
        {/*}}>*/}
        {/*    Customize Container*/}
        {/*</Container>*/}
        {/*<UserAccount role={"admin"} />*/}
        {/*<Conditional role={'admin'} />*/}
        {/*<ItemList items={ ['Apple', 'Orange', 'Banana' ] } />*/}
        {/*<TodoListDemo />*/}
        {/*<CustomButtonDemo />*/}
        {/*<PropagationDemo />*/}
        {/*<Counter />*/}
        {/*<Counter />*/}
        {/*<TabDemo />*/}
        {/*<StateProblem1 />*/}
        {/*<UpdateObject />*/}
        {/*<UpdateArray />*/}
        <UpdateArrayDemo />
    </div>
  );
}

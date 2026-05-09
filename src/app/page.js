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
import UpdateArrayDemo from "@/app/components/state/UpdateArrayDemo";
import Form from "@/app/components/state/Form";
import ReconciliationOne from "@/app/components/reconciliation/ReconciliationOne";
import CounterWithReducer from "@/app/components/reducer/CounterWithReducer";
import TodoListWithReducer from "@/app/components/reducer/TodoListWithReducer";
import WhyContext from "@/app/components/context/WhyContext";
import ContextDemo from "@/app/components/context/ContextDemo";
import TodoReducerWithContext from "@/app/components/context/TodoReducerWithContext";
import FilterableProductTable from "@/app/components/product/FilterableProductTable";
import WhyRef from "@/app/components/ref/WhyRef";
import RefDemo from "@/app/components/ref/RefDemo";
import FocusInput from "@/app/components/ref/FocusInput";
import WhyEffect from "@/app/components/effect/WhyEffect";
import UseEffectDemo from "@/app/components/effect/UseEffectDemo";
import WhyCleanUp from "@/app/components/effect/WhyCleanUp";
import FetchTodo from "@/app/components/hook/FetchTodo";
import FetchUser from "@/app/components/hook/FetchUser";
import HookRule from "@/app/components/hook/HookRule";
import CallbackHookDemo from "@/app/components/hook/CallbackHookDemo";
import WhySuspense from "@/app/components/suspend/WhySuspense";
import SearchResultDemo from "@/app/components/hook/SearchResultDemo";
import ImperativeHandleDemo from "@/app/components/hook/ImperativeHandleDemo";
import Modal from "@/app/components/portal/Modal";
import ModalDemo from "@/app/components/portal/ModalDemo";
import ErrorDemo from "@/app/components/error-boundary/ErrorDemo";
import CarouselDemo from "@/app/components/design-pattern/compound-pattern/CarouselDemo";

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
        {/*<UpdateArrayDemo />*/}
        {/*<Form />*/}
        {/*<ReconciliationOne />*/}
        {/*<CounterWithReducer />*/}
        {/*<TodoListWithReducer />*/}
        {/*<WhyContext />*/}
        {/*<ContextDemo />*/}
        {/*<TodoReducerWithContext />*/}
        {/*<FilterableProductTable />*/}
        {/*<WhyRef />*/}
        {/*<RefDemo />*/}
        {/*<FocusInput />*/}
        {/*<WhyEffect />*/}
        {/*<TodoListDemo />*/}
        {/*<TodoListWithReducer />*/}
        {/*<UseEffectDemo />*/}
        {/*<WhyCleanUp />*/}
        {/*<FetchTodo />*/}
        {/*<FetchUser />*/}
        {/*<HookRule />*/}
        {/*<CallbackHookDemo />*/}
        {/*<WhySuspense />*/}
        {/*<SearchResultDemo />*/}
        {/*<ImperativeHandleDemo />*/}
        {/*<ModalDemo />*/}
        {/*<ErrorDemo />*/}
        <CarouselDemo>
            <div>
                <img src={'/carousel/1.jpg'} alt="" width='100%' height={'300px'}/>
            </div>
            <div>
                <img src={'/carousel/2.jpg'} alt="" width='100%' height={'300px'}/>
            </div>
            <div>
                <img src={'/carousel/3.jpg'} alt="" width='100%' height={'300px'}/>
            </div>
            <div>
                <img src={'/carousel/4.jpg'} alt="" width='100%' height={'300px'}/>
            </div>
            <div>
                <img src={'/carousel/5.jpg'} alt="" width='100%' height={'300px'}/>
            </div>
        </CarouselDemo>
    </div>
  );
}

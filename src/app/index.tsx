import { h, Component } from "preact";
export interface AppProps {
  name: string;
}
interface AppState {
  name: string;
}
export class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { name: props.name };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({name: "World"});
    }, 2000);
  }
  render(props: AppProps, state: AppState) {
    return <h1>Hello {state.name}!</h1>;
  }
}

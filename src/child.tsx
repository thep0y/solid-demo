import { Show } from "solid-js";

interface ChildProps {
  isDark: boolean;
  id: number;
}

const Child = (props: ChildProps) => {
  console.log(props);
  return (
    <div>
      <span>{props.id}</span>
      <Show when={props.isDark} fallback={<span>Light</span>}>
        <span>Dark</span>
      </Show>
    </div>
  );
};

export default Child;

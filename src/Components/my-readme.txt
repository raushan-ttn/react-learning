Class based components
=======================
1. Class based component is alternative way to create component.
2. Components can also be defined as JS classes where a render() method defines the to-be-rendered output.
3. Class based component have exceptional error boundaries.so that we can prefer class based components, OR its based on own choice.
4. Traditionally (React < 16.8) we could not change state in functional component, you had to use Class-based componenet to manage "State".
5. Class based component can not use React Hooks.
6. Class based component can work togather with functional components.
7. In class based component state always will be object, but in function componenet state can be anything(string, boolean, object).
8. And it also has to be a property name "state"! this name is not up to you.
9. In class based component always group all states in "state" object.

10. Life Cycle Methods
   1. componentDidMount() => Called once component mounted (was evaluated & rendered)
                             this is equvalent to useEffect(...,[])  => Every Effect funtion is executed when the component first is Mounted, but if you have no dependancy (empty dependacy array) then effect function only executed in that case.
      Note: useEffect() with empty dependancy is equvalent to componenetDidMount.

   2. componentDidUpdate() => Called once component updated (was evaluated & rendered), This is called once a
                              component was updated.
                              useEffect(...,[someValue]) =>  whenever dependancy was changed the UseEffect function will re-execute.

   3. componentWillUnmount() => Called right before component is unmounted (removed from DOM)
                              this is equvalent to cleanUp function useEffect(() => {return () => {...}},[])
                              that cleanUp function will called right before the effect function executed again. and also always again the componenet about to remove.


Functional components
======================

1. Default and most modern Approach to create component.
2. Components are regular javaScript function, which return renderable results (typically JSX).
3. React 16.8 introduce "React Hooks" for functional components.
4. In class based component state always will be object, but in function componenet state can be anything(string, boolean, object).
5. We can also group all state in one useState({}), but this is optional, we can use multiple useState to define multiple state.

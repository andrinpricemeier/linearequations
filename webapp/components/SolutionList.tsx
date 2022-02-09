export type EquationSolution = {
    unknown: string;
    value: number;
}

interface ISolutionListProps {
    solutions: EquationSolution[]
}

const SolutionList = (props: ISolutionListProps) => {
    return (
        <>
            {props.solutions.length > 0 ? props.solutions.map(sol => {
                return <p key={`solution.${sol.unknown}`} >{sol.unknown}: {sol.value}</p>
            }) : <p>No solutions.</p>}
        </>
    )
}

export default SolutionList;
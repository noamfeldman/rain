export interface IDropsProps {
    numOfDrops: number;
    righteous?: boolean;
}

export interface QuestionnaireProps {
    onChange: (righteous: boolean) => void;
}
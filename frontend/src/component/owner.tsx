import React from 'react';
import { CommentEditor } from './commenteditor';

interface Props { }
interface State {
    // comments?: CommentModel[];
}

export class Owner extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {};
    }

    // public async componentDidMount() {
    //     const comments = (await (await fetch('/api/book')).json() as any[]).map(CommentModel.fromJSON);
    //     this.setState({ comments });
    // }

    public render() {

        return <>
            <h3>LE FONDATEUR</h3>
            <img src='img/fondateur.jpg' />
            <div>Vos commentaires:</div>
            <CommentEditor />
        </>;
    }

}

import { CommentModel } from 'common';
import React from 'react';


interface Props { }
interface State {
    personName?: string;
    contentMessage?: string;
    publicationDate?: Date;
}

export class CommentCreationForm extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {};
    }
    // addedd for testing
    public async componentDidMount() {
        const comments = (await (await fetch('/api/comment')).json() as any[]).map(CommentModel.fromJSON);
    }
    // addedd for testing
    public render() {
        const { personName, contentMessage } = this.state;

        return <>
            <form onSubmit={this.addComment}>
                <label>Votre Nom:<input type='text' required={true} value={personName ?? ''} onChange={e => {
                    this.setState({ personName: e.target.value });
                }} /></label>
                <label>Votre message:<input type='text' required={true} value={contentMessage ?? ''} onChange={e => {
                    this.setState({ contentMessage: e.target.value });
                }} /></label>
                <input type='submit' value='Commenter' />
            </form>

        </>;
    }
    // public addComment(e: React.FormEvent) {
    //     e.preventDefault();
    // }
    public addComment = async (e: React.FormEvent) => {

        e.preventDefault();
        // const createComment = CommentModel.fromJSON(await
        //     (await fetch('/api/comment', {
        //         method: 'POST',
        //         body: JSON.stringify({ personName: this.state.personName }),
        //         headers: { 'content-type': 'application/json' }
        //     })).json());
        // this.state.comments!.push(createComment);
        // this.setState({ comments: this, state.comments });
    };
}

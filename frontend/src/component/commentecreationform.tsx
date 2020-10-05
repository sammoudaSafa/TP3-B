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

    public render() {
        const { personName, contentMessage } = this.state;

        return <>
            <form onSubmit={this.addComment}>
                <label>Votre Nom:<input type='text' required={true} value={personName ?? 'Anonyme'} onChange={e => {
                    this.setState({ personName: e.target.value });
                }} /></label>
                <label>Votre message:<input type='text' required={true} value={contentMessage ?? ''} onChange={e => {
                    this.setState({ contentMessage: e.target.value });
                }} /></label>
                <input type='submit' value='Commenter' />
            </form>

        </>;
    }
    public addComment(e: React.FormEvent) {
        e.preventDefault();
    }
}

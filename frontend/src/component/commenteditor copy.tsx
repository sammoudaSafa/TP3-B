import { CommentModel } from 'common';
import React from 'react';


interface Props { }
interface State {
    comments?: CommentModel[];
}

export class CommentEditor extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {};
    }

    public async componentDidMount() {
        const comments = (await (await fetch('/api/comment')).json() as any[]).map(CommentModel.fromJSON);
        this.setState({ comments });
    }

    public render() {
        const { comments } = this.state;
        if (!comments) { return 'Chargement...'; }

        return <>
            {comments.map(comment => <div key={comment.commentId}>
                <table >
                    <caption>Commentaire{comment.commentId}</caption>
                    <tr>
                        <th>Nom: </th>
                        <td> {comment.personName}</td>
                    </tr>
                    <tr>
                        <th>Message: </th>
                        <td> {comment.contentMessage}</td>
                    </tr>
                    <tr>
                        <th>Date de publication: </th>
                        <td> {comment.publicationDate.toString()}</td>
                    </tr>
                </table>
                <br />
                <br />
            </div>)}

        </>;
    }
}

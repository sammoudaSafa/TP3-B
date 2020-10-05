import { CommentEditor } from 'component/commenteditor';
import React from 'react';

interface Props { }
interface State {
    // comments?: CommentModel[];
}

export class Home extends React.Component<Props, State> {

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
            <div>
                <img src='img/banner2.jpg' />
                <section className='contenu'>Riche d’un héritage de plus de 3 000 ans, nous produisons notre huile d’olive en respect des normes de qualité les plus strictes, cueillons toujours nos olives à la main et travaillons nos champs d’oliviers sans utiliser de produits chimiques. La fierté d’un héritage ou le symbole du cheval représente la fertilité et de prospérité a cartage, la royaume des amazighs.
                </section>
                <div>Vos commentaires:</div>
                <CommentEditor />

            </div>
        </>;
    }

}

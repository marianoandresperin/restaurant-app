import { useLogin } from "../../contexts/LoginContext";
import { useTeam } from "../../contexts/TeamContext";
import SuperheroDetail from '../../components/SuperheroDetail/SuperheroDetail';
import { useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {
    const { auth } = useLogin();
    const { team, handleRemove, handleAdd } = useTeam();
    const [detail, setDetail] = useState(null);
    const [added, setAdded] = useState(false);
    const { heroId } = useParams();
    const mainURL = 'https://superheroapi.com/api/';
    const token = '10226513330317308';

    const removeSuperhero = ((hero) => {
        let heroById = team.find(({ id }) => id === hero.target.id);
        handleRemove(heroById);
    })

    const addSuperhero = (() => {
        handleAdd(detail);
    });

    useEffect(() => {
        axios({
            baseURL: `https://cors-anywhere.herokuapp.com/${mainURL}${token}/`,
            url: `${heroId}`
        })
            .then(snapshot =>
                setDetail(snapshot.data)
            )
            .catch(err =>
            console.log(err)
        )
        team.some((hero) => hero.id === heroId) ? setAdded(true) : setAdded(false);
        // detail && detail.biography.alignment.good === true ? setAlignment('good') : setAlignment('bad')
    }, [team, heroId])

    return (
        <>
        {heroId < 733 ? <>
            <div className="container-fluid background">
                <div className="container d-flex flex-column justify-content-center align-items-center">
                    {auth === true ? <>
                            {detail ? <SuperheroDetail
                            name={detail.name}
                            alias={detail.biography.aliases[0]}
                            height={detail.appearance.height[1]}
                            weight={detail.appearance.weight[1]}
                            workplace={detail.work["base"]}
                            eyecolor={detail.appearance["eye-color"]}
                            haircolor={detail.appearance["hair-color"]}
                            pictureurl={detail.image.url}
                            add={addSuperhero}
                            remove={removeSuperhero}
                            id={detail.id}
                            added={added}
                            goodOrBad={detail.biography.alignment}
                            /> :<div className="spinner-border detail-loading m-5" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>}
                    </> : <Redirect to="/" />}
                </div>
                </div></> : <Redirect to={"/error"} />}
        </>
    )
}

export default Detail;
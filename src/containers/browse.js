import React, { useState, useEffect, useContext } from "react";
import { Header, Loading, Card, Player } from "../components";
import { SelectProfileContainer } from "./profile";
import { FooterContainer } from "../containers/footer";
import Fuse from "fuse.js";
import { FirebaseContext } from "../context/firebase";

export function BrowseContainer({ slides }){
    const [ searchTerm, setSearchTerm ] = useState('');
    const [ category, setCategory ] = useState('films');
    const [ profile, setProfile ] = useState({});
    const [ loading, setLoading ] = useState(true);
    const [ slideRows, setSlideRows ] = useState([]);

    const { firebase } = useContext(FirebaseContext);

    const user = {
        displayName: "Will",
        photoURL: 1
    }

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        }, 3000)
    }, [user]);

    useEffect(()=>{
        setSlideRows(slides[category]);
    }, [ category, slides ])

    useEffect(()=>{
        const fuse = new Fuse(slideRows, { keys: ['data.description', 'data.title', 'data.genre']});
        const results = fuse.search(searchTerm).map(({item}) => item);
        if(slideRows.length > 0 && searchTerm.length > 3 && results.length > 0){
            setSlideRows(results);
        } else {
            setSlideRows(slides[category]);
        }
    }, [ searchTerm ])

    return (
        profile.displayName ? 
            (<>
                {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
                <Header src="joker1" alt="joker">
                    <Header.Frame>
                        <Header.Group>
                            <Header.Logo 
                                to="/" 
                                src="./images/misc/logo.svg" 
                                alt="netflix-logo" 
                            />
                            <Header.Link 
                                onClick={()=> setCategory("series")} 
                                active={category === "series"}
                            >
                                Series
                            </Header.Link>
                            <Header.Link 
                                onClick={()=> setCategory("films")} 
                                active={category === "films"} 
                            >
                                Films
                            </Header.Link>
                        </Header.Group>
                        <Header.Group>
                            <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                                <Header.Profile>
                                    <Header.Picture src="1" />
                                    <Header.Dropdown>
                                        <Header.Group>
                                            <Header.Picture src="1" />
                                            <Header.Link>Will</Header.Link>
                                        </Header.Group>
                                        <Header.Group>
                                            <Header.Link
                                                onClick={()=> firebase.auth().signOut()}
                                            >
                                                Sign out
                                            </Header.Link>
                                        </Header.Group>
                                    </Header.Dropdown>
                                </Header.Profile>
                        </Header.Group>
                    </Header.Frame>
                    <Header.Feature>
                        <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
                        <Header.Text>
                            Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the
                            streets of Gotham City. Arthur wears masks - the one he paints for his day job as a clown,
                            and the guise he projects in a futile attempt to feel like he's part of the world around him.
                        </Header.Text>
                        <Header.PlayButton>Play</Header.PlayButton>
                    </Header.Feature>
                </Header>
                <Card.Group>
                   {slideRows.map((slideItem)=>(
                       <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
                           <Card.Title>{slideItem.title}</Card.Title>
                           <Card.Entities>
                               {slideItem.data.map((item)=> (
                                   <Card.Item key={item.docId} item={item}>
                                       <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                                       <Card.Meta>
                                           <Card.SubTitle>{item.title}</Card.SubTitle>
                                           <Card.Text>{item.description}</Card.Text>
                                       </Card.Meta>
                                   </Card.Item>
                               ))}
                           </Card.Entities>
                           <Card.Feature category={category}>
                               <Player>
                                   <Player.Button />
                                   <Player.Video />
                               </Player>
                           </Card.Feature>
                       </Card>
                   ))}
                </Card.Group>
                <FooterContainer />
            </>) 
            : (<SelectProfileContainer user={user} setProfile={setProfile} />)
    )
}
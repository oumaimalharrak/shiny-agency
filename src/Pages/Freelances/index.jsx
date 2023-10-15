import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const CardsContainer = styled.div`
display: grid;
gap: 24px;
grid-template-rows: 350px 350px;
grid-template-columns: repeat(2, 1fr);
align-items: center;
justify-items: center;
  
`

const Title= styled.h1`
font-size:30px;
color:black;
text-align:center;
padding-bottom:30px
`
const Subtitle=styled.h2`
font-size:20px;
color:${colors.secondary};
font-weight:300;
text-align:center;

`

const freelanceProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'Devops',
  },
  {
    name: 'John Doe',
    jobTitle: 'Developpeur frontend',
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Développeuse Fullstack',
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Développeuse Fullstack',
  },
]

function Freelances() {
  return (
    <div>
      <Title>Freelances 👩‍💻👨‍💻👩‍💻</Title>
      <Subtitle>Chez Shiny nous réunissons les meilleurs profils pour vous.</Subtitle>
      <CardsContainer>
        {freelanceProfiles.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            label={profile.jobTitle}
            title={profile.name}
          />
        ))}
      </CardsContainer>
    </div>
  )
}

export default Freelances
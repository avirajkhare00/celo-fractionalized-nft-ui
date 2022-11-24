import Navbar from '../Navbar/Navbar';
import {Button} from '../../Globalstyles';
import {buyNFT, redeemNFT} from '../../App';
import {
    MainContentContainer,
    MainContentElement,
    MainContentElementText,
    MainContentTitle,
    MainContentTitleText,
    MainContentText,
    MainContentBtn,

} from './MainContent.styles';

const MainContent = props =>{
    return(
        <div>
           <MainContentContainer>
               <Navbar cUSDBalance={props.cUSDBalance} celoBalance={props.celoBalance} address={props.address}
                    connectCeloWallet={props.connectCeloWallet}/>
               <MainContentElement>
                   <MainContentElementText>
                        <MainContentText>
                            Buy NFT
                        </MainContentText>
                        <MainContentBtn>
                           <Button primary bigFont onClick={buyNFT}>Buy</Button>
                        </MainContentBtn>
                        <MainContentText>
                            Redeem NFT
                        </MainContentText>
                        <MainContentText>
                            <input id='redeemNFTAmount' type='text' placeholder='Enter the value'></input>
                        </MainContentText>
                        <MainContentBtn>
                           <Button primary bigFont onClick={redeemNFT}>Redeem</Button>
                        </MainContentBtn>
                   </MainContentElementText>
               </MainContentElement>
           </MainContentContainer>
        </div>
    )
}

export default MainContent;
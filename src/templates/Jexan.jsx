import React from 'react';
import {UserDataContext} from '../contexts/UserDataProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'


const Jexan = () => {
    const {userData} = React.useContext(UserDataContext);

    return (
        <div>
             <table cellPadding={3} cellSpacing={0} width={300}>
                <tbody>
                    <tr>
                        <td align="center">
                            <a href="https://jexan.com" target="_blank" rel="noreferrer">
                                <img src="https://storage.googleapis.com/jexan-signatures/assets/logo.png" alt="Jexan" width={273} height={64} /></a><br />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div style={{height: '5px'}} />
                        </td>
                    </tr>
                    <tr style=
                        {
                            userData.email || userData.phone 
                            ? {borderBottom: '2px solid #000000'}
                            : {}
                        }>
                        <td>
                            <table cellPadding={0} cellSpacing={0} width={300}>
                                <tr>
                                    {
                                        userData.avatarImageUrl && (
                                            <td width={110} align="center">
                                                <a href={userData.avatarImageLink ? userData.avatarImageLink : ''} target="_blank" rel="noreferrer">
                                                    <img src={userData.avatarImageUrl} alt="Jexan" width={90} height={90} style={{width: '85px', height: '90px'}} />
                                                </a>
                                            </td>
                                        )
                                    }
                                    <td width={userData.avatarImageUrl ? 190 : 300}>                                                            
                                        <table cellPadding={0} cellSpacing={0} border={0}>
                                            <tbody>
                                                {
                                                    userData.name && (
                                                        <tr>
                                                            <td>
                                                                <span style={{display: 'inline-block', color: '#000000', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '16px', fontWeight: 'bold', textTransform: 'uppercase'}}>
                                                                    {userData.name}
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    )
                                                }
                                                {
                                                    userData.position || userData.department
                                                    ?
                                                        <tr>
                                                            <td>
                                                                <span style={{display: 'inline-block', color: '#000000', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '16px'}}>
                                                                    {userData.position ? userData.position : null} {userData.department ? ' | ' + userData.department : null}
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    : null
                                                    
                                                }
                                                <tr>
                                                    <td height={10}><div style={{height: '10px'}} /></td>
                                                </tr>
                                                {
                                                    userData.address_1 || userData.address_2 || userData.city || userData.zip || userData.state
                                                    ? <tr>
                                                        <td style={{lineHeight: 1}}>
                                                        <span style={{fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '14px', lineHeight: 1, fontWeight: 'normal', color: '#000'}}>
                                                            {
                                                                userData.address_1
                                                                ? <>
                                                                    {userData.address_1} <br/>
                                                                  </>
                                                                : null
                                                            }
                                                            {
                                                                userData.address_2
                                                                ? <>
                                                                    {userData.address_2} <br/>
                                                                  </>
                                                                : null
                                                            }
                                                            {
                                                                userData.city
                                                                ? <>{userData.city},</>                                                                
                                                                : null
                                                            }
                                                            {
                                                                userData.state
                                                                ? <>{' ' + userData.state}</>                                                                  
                                                                : null
                                                            }
                                                            {
                                                                userData.zip
                                                                ? <>{' ' + userData.zip}</>                                                                 
                                                                : null
                                                            }                                                            
                                                        </span>
                                                        </td>
                                                    </tr>
                                                    : null
                                                }
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>                        
                    </tr>
                    {
                        userData.email || userData.website || userData.skype || userData.phone || userData.mobile
                        ?
                        <>
                            <tr>
                            <td valign="top">
                                <table cellPadding={0} cellSpacing={0} >
                                    <tbody>
                                        <tr>
                                            {
                                                userData.email || userData.website || userData.skype
                                                ?
                                                    <>
                                                        <td style={{borderRight: '2px solid #000000', paddingRight:'5px'}} width={150} valign="top">
                                                            {
                                                                userData.email
                                                                ? <>
                                                                    <span style={{fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '11px', lineHeight: 1, fontWeight: 'normal', color: '#000000'}}>
                                                                        <a style={{color: '#000000', textDecoration: 'none', display: 'inline'}} href={`mailto:${userData.email}`}><strong>Email:</strong> {userData.email}</a>
                                                                    </span>
                                                                    <br />
                                                                  </>
                                                                : null
                                                            }
                                                            {
                                                                userData.website
                                                                ? <>
                                                                    <span style={{fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '11px', lineHeight: 1, fontWeight: 'normal', color: '#000000'}}>
                                                                        <strong>Website:</strong> {userData.website}
                                                                    </span>
                                                                    <br />
                                                                  </>
                                                                : null
                                                            }
                                                            {
                                                                userData.skype
                                                                ? <>
                                                                    <span style={{fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '11px', lineHeight: 1, fontWeight: 'normal', color: '#000000'}}>
                                                                        <strong>Skype:</strong> {userData.skype}
                                                                    </span>
                                                                    <br />
                                                                  </>
                                                                : null
                                                            }
                                                        </td>                                                        
                                                    </>
                                                : null                                                
                                            }
                                            {
                                                userData.phone || userData.mobile
                                                ?   <td align='right' width={userData.email || userData.website || userData.skype ? 150 : 300} valign="top">
                                                        {
                                                            userData.phone
                                                            ? <>
                                                                <span style={{fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '11px', lineHeight: 1, fontWeight: 'normal', color: '#000000'}}>
                                                                    <strong>Office:</strong> {userData.phone}
                                                                </span>
                                                                <br/>
                                                            </>
                                                            : null
                                                        }
                                                        {
                                                            userData.mobile
                                                            ? <>
                                                                <span style={{fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '11px', lineHeight: 1, fontWeight: 'normal', color: '#000000'}}>
                                                                    <strong>Mobile:</strong> {userData.mobile}
                                                                </span>
                                                            </>
                                                            : null
                                                        }
                                                    </td>   
                                                : null
                                            }
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        </>
                        : null
                    }
                    {
                        userData.facebook || userData.instagram || userData.twitter || userData.youtube || userData.linkedin
                        ? <tr>
                            <td align="left" width={300}>
                                {
                                    userData.facebook && (
                                        <a href={userData.facebook} target="_blank" rel="noreferrer" className="mr-1 facebook">
                                            <FontAwesomeIcon icon={faFacebook} size="2x"/>
                                        </a>                                       
                                    )
                                }
                                {
                                    userData.instagram && (
                                        <a href={userData.instagram} target="_blank" rel="noreferrer" className="mr-1 instagram">
                                            <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                        </a>                                       
                                    )
                                }
                                {
                                    userData.twitter && (
                                        <a href={userData.twitter} target="_blank" rel="noreferrer" className="mr-1 twitter">
                                            <FontAwesomeIcon icon={faTwitter} size="2x"/>
                                        </a>                                       
                                    )
                                }
                                {
                                    userData.linkedin && (
                                        <a href={userData.linkedin} target="_blank" rel="noreferrer" className="mr-1 linkedin">
                                            <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                                        </a>                                       
                                    )
                                }
                                {
                                    userData.youtube && (
                                        <a href={userData.youtube} target="_blank" rel="noreferrer" className="youtube">
                                            <FontAwesomeIcon icon={faYoutube} size="2x"/>
                                        </a>                                       
                                    )
                                }                           
                            </td>
                        </tr>
                        : null
                    }

                    {
                        userData.bannerUrl && (
                            <tr>
                                <td width={300}>
                                    <img src={userData.bannerUrl} alt="Banner" style={{maxWidth: '300px'}}/>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Jexan

import React from 'react';
import {UserDataContext} from '../contexts/UserDataProvider';

const Jexan = () => {
    const {userData} = React.useContext(UserDataContext);

    return (
        <div>
             <table cellPadding={0} cellSpacing={0} width={300}>
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
                    <tr style={{borderBottom: '2px solid #000000'}}>
                        <td>
                            <table cellPadding={0} cellSpacing={0} width={300}>
                                <tr>
                                    {
                                        userData.avatarImage && (
                                            <td width={110} align="center">
                                                <a href="https://www.instagram.com/thejexans/" target="_blank" rel="noreferrer">
                                                    <img src={userData.avatarImageSrc} alt="Jexan" width={85} height={90} style={{width: '85px', height: '90px'}} />
                                                </a>
                                            </td>
                                        )
                                    }
                                    <td width={userData.avatarImage ? 190 : 300}>                                                            
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
                                                    userData.position && (
                                                        <tr>
                                                            <td>
                                                                <span style={{display: 'inline-block', color: '#000000', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '16px'}}>
                                                                    {userData.position}
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    )
                                                }
                                                <tr>
                                                    <td height={10}><div style={{height: '10px'}} /></td>
                                                </tr>
                                                <tr>
                                                    <td style={{lineHeight: 1}}>
                                                    <span style={{fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '14px', lineHeight: 1, fontWeight: 'normal'}}>
                                                        <a href="https://maps.google.com/?cid=14652959725652235882" rel="noreferrer" style={{color: '#000000', textDecoration: 'none', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '14px', lineHeight: '0.9', fontWeight: 'normal'}} target="_blank">
                                                        515 E Grant St.<br />
                                                        Suite 150<br />
                                                        Phoenix, AZ 85004
                                                        </a>
                                                    </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>                        
                    </tr>
                    {
                        userData.email || userData.phone 
                        ?
                        <>
                            <tr>
                                <td>
                                    <div style={{height: '5px'}} />
                                </td>
                            </tr>
                            <tr>
                            <td>
                                <table>
                                    <tbody>
                                        <tr>
                                            {
                                                userData.email && (
                                                    <>
                                                        <td style={{borderRight: '2px solid #000000', paddingRight:'5px'}} width={150}>
                                                            <span style={{fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '11px', lineHeight: 1, fontWeight: 'normal', color: '#000000'}}>
                                                                <a style={{color: '#000000', textDecoration: 'none', display: 'inline'}} href={`mailto:${userData.email}`}>{userData.email}</a>
                                                            </span>
                                                        </td>
                                                        <td width={5} />
                                                    </>
                                                )
                                            }
                                            {
                                                userData.phone && (
                                                <>
                                                    <td align='right' width={userData.email ? 150 : 300} >
                                                        <span style={{fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '11px', lineHeight: 1, fontWeight: 'normal', color: '#000000'}}>
                                                            <a style={{color: '#000000', textDecoration: 'none', display: 'inline'}}>{userData.phone}</a>
                                                        </span>
                                                    </td>
                                                </>
                                                )
                                            }
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        </>
                        : null
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Jexan

import React from 'react';
import {UserDataContext} from '../contexts/UserDataProvider';

const Jexan = () => {
    const {userData} = React.useContext(UserDataContext);

    return (
        <div>
             <table cellPadding={0} cellSpacing={0} width={300}>
                <tbody>
                    <tr>
                        <td colSpan={2} align="center">
                        <a href="https://jexan.com" target="_blank" rel="noreferrer"><img src="https://storage.googleapis.com/jexan-signatures/assets/logo.png" alt="Jexan" width={273} height={64} /></a><br />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <div style={{height: '5px'}} />
                        </td>
                    </tr>
                    <tr style={{borderBottom: '2px solid #000000'}}>
                        <td width={110} align="center">
                            <a href="https://www.instagram.com/thejexans/" target="_blank" rel="noreferrer">
                                <img src="https://storage.googleapis.com/jexan-signatures/avatars_blue_bg/alejandra.png" alt="Jexan" width={85} height={90} style={{width: '85px', height: '90px'}} />
                            </a>
                        </td>
                        <td width={190}>
                            <table cellPadding={0} cellSpacing={0} border={0}>
                                <tbody>
                                    <tr>
                                        <td>
                                            <span style={{display: 'inline-block', color: '#000000', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '16px', fontWeight: 'bold', textTransform: 'uppercase'}}>
                                                {userData.name}
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span style={{display: 'inline-block', color: '#000000', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '16px'}}>
                                                Digital Alchemist
                                            </span>
                                        </td>
                                    </tr>
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
                    <tr>
                        <td>
                            <div style={{height: '5px'}} />
                        </td>
                    </tr>
                    <tr>
                        <td style={{borderRight: '2px solid #000000'}}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <span style={{fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '11px', lineHeight: 1, fontWeight: 'normal', color: '#000000'}}>
                                                <a style={{color: '#000000', textDecoration: 'none', display: 'inline'}} href="mailto:au@jexan.com">au@jexan.com</a>
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td>
                            <table cellPadding={0} cellSpacing={0} border={0}>
                                <tbody>
                                    <tr>
                                        <td width={5} />
                                        <td>
                                            <span style={{fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '11px', lineHeight: 1, fontWeight: 'normal', color: '#000000'}}>
                                                <a style={{color: '#000000', textDecoration: 'none', display: 'inline'}} href="tel:+18777053926">+1 (877) 705-3926</a>
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Jexan

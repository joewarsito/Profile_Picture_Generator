import React, { Component } from 'react';
// import './Style.css';
import axios from 'axios'


class Robo extends Component {
    state = { a: '', b: '', color: '' }
    render() {
        let cari = () => {
            var url = `https://robohash.org/${this.state.a}`
            axios.get(url)
                .then((z) => {
                    console.log(z.data)
                    this.setState({ b: z.data })
                })
                .catch((z) => { console.log(z) })
        }
        return (
            <center>

                <div className='input-group my-3 w-50'>
                    <input ref='a' type='text' className='form-control'
                        placeholder='Ketik Nama Anda...'
                        onInput={() => {
                            this.setState({ a: this.refs.a.value })
                        }
                        } />
                </div>
                <div>
                    <button type='submit' className='btn btn-success' onClick={cari}>Buat Profil Picture</button>
                </div>
                <div>
                    <img alt='robots' src={`https://robohash.org/${this.state.a}?200x200`} />
                </div>
            </center >
        );
    }
}

export default Robo

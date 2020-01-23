import React from "react";
import Popup from "reactjs-popup";
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import SavePDF from './SavePDF';

export default () => (
  <Popup trigger={<button className="button" style={{
    cursor: 'pointer',
    padding: 10,
    paddingLeft: 10,
    paddingRight: 10,
    color: 'darkblue',
    fontWeight: 'bold',
  }}> Lihat Data Saya </button>} modal>
    {close => (
      <div className="modal">
        {/* <a className="close" onClick={close}>
          &times;
        </a> */}

        {/* <PDFViewer>
           <SavePDF />
        </PDFViewer> */}

        <div className="header"> 
          <h3
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center'
            }}
          >
            FORMULIR PENDAFTARAN PESERTA DIDIK BARU
          </h3>
          <hr/>
        </div>

        <div className="content" style={{

            }}>
            <SavePDF />
            <br/>
        </div>
        <hr/>

        <div className="actions" style={{
            textAlign:'right',
            paddingTop: 5,
            paddingBottom: 20,
            paddingRight: 20,
        }}>
            <button className="button" style={{ 
                    marginRight:5,
                    padding: 10,
                    paddingLeft: 10,
                    paddingRight: 10,
                    cursor: 'pointer', 
                }}>
                <PDFDownloadLink document={<SavePDF />} fileName='Formulir_PPDB.pdf'>
                    {({ blob, url, loading, error }) =>
                    loading ? 'Loading document...' : 'Download Formulir'
                    }
                </PDFDownloadLink>
            </button>
            <button
                className="button"
                onClick={() => {
                console.log("modal closed ");
                close();
                }}
                style={{
                    padding: 10,
                    paddingLeft: 10,
                    paddingRight: 10,
                    cursor: 'pointer',
                }}
            >
                Close
            </button>           
        </div>
      </div>
    )}
  </Popup>
);

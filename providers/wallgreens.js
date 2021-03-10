const axios = require('axios');
const fetchUrl = 'https://www.walgreens.com/hcschedulersvc/svc/v1/immunizationLocations/availability';
const linkUrl = 'https://www.walgreens.com/findcare/vaccination/covid-19/location-screening';

const config = {
  xsrfHeaderName: 'X-XSRF-TOKEN',
  headers: {
    "X-XSRF-TOKEN": 'syhHP7SCRBgjQw==.sJh0pPWAJmJq/1ClrKNonrphB6BgxDpf7iOUBGZOazI=',
    Cookie: '_gcl_au=1.1.272039466.1610732576; bm_sz=4E7C8972D05F07289D29B679AB606911~YAAQzzhjaOg4zRh4AQAAO/1XHAszFg4rHbgTUmgOy1yZ3aDaB0c5diT4omd+WR91AuCWeDG/FU4EjKH8wOA3R5QDhnM+pxBfJRHU0PtU5qvXKnGNs6vzB/3Cg+3gdL2Ds7nWd2CM7sIRXYB506XxVLhHthF+qFT67V0134s+vC6Nwd5+z8MiIBMxGXt/eprZk9jd; XSRF-TOKEN=gFEt8EKfl7qJpA==.ie3nKgcNn1I6QYZ4zwLrQr5kdTRFUI3M4e81CzQp2m0=; dtCookie=6$D895CA0415DFC3001779B5217EF14234|0eed2717dafcc06d|1; ak_bmsc=5F1D36BF06A23C251510EF26BFA03105686338CF4D8D0000C0CA486085A98329~plpk+K/pPA+UPWhOBFPn+4DSEhxP74DxzZHuTVfDNi6nTgKaTMrpH3z9ltDHNyvjMnftPj4+L3CvXcgM8l8XFB1MLLuEycLEsuviIcCZ47wVbwFvZNOxnAXGPjJ2df2ULjnONnAAPk9/1pska7M0uyslBJwO2bluUbx0n4KX23tcMLnkd0u1lIpeVF0LZq3nCEMsUSyp3YOgLOrU4gRtMHMVRUbVv4L4XYYn19FMRB+ls=; wag_sid=gqo1m6f4tk1ut25xnwog6239; uts=1615383232986; session_id=060bc71c-52df-4fe4-be5e-f760f081fdcb; at_check=true; AMCVS_5E16123F5245B2970A490D45%40AdobeOrg=1; fc_vnum=1; fc_vexp=true; firstVisit=fc_fVisit; gRxAlDis=N; USER_LOC=2%2BsKJSc9HtJ7n0Wp63Ft97Bloi7dEmLjHrNDHtTLIUck1eeLPJ6hd0ljDA5Jtoqd; mbox=PC#44c95225aef8451ca70397cf0e723f3e.35_0#1678629660|session#7fa616f2c80645b1805454788899dc8c#1615385094; AMCV_5E16123F5245B2970A490D45%40AdobeOrg=-1124106680%7CMCIDTS%7C18697%7CMCMID%7C74343158070117164560566077008496382118%7CMCOPTOUT-1615392061s%7CNONE%7CvVersion%7C5.2.0; bm_mi=3EA64311A81BC153410A041E8A2989E5~fAAJ33EOONWVVPZsKtaFIMYDVAUIZ6WpQ2g2M4oxeCvP5jfHMfA3AubPfI7vudT/NBKN3Brb7/lHYb2BG+MHX21Nevb851OWlDTkJB54cpmUqbC0VekCYbE4O+dioQPKoxLdG/AOLad5eb5KNFrccprnNH8zlv5KcptG/3Us8S7gMI/UG1mf+RnFLJdXyGP2g3mmdDb3cIl5dIKGzbpGN5meeuPPqU6LPhjc5cc2GA5p1kRcnWg6TKp19cbQk0DXQEX70b5gOdJjFB58MHP8srY9stHqFXxLGvR0fw+7+l0=; _abck=DC4DC6AB1307F9A32EF05A519960BA28~0~YAAQzzhjaCMO0Bh4AQAANexwHAVIOF/MCeWgPlpZxj/4t6goUCWB3Ph9aTEmDnOXez4F26hYT8as9SLh7aLziK8NDP++A1M1mTSmRoDPa9jERxz0rOU23ti3+GQXjsn0imCtpB01cbf6vNel3GDOrNpJ6Ok6qEtQ3UVy7NK0ojoR/tFxBEPQTia1p4A66Z+HZN1ai8qPkcVLWAKP4YM/oirbGgl2EoWPt4XVEBYrnPM28m4OPKK6x2xtsia0qXB4YaVVobdJ+N1GQKUerKu3QtrJ7/fqKsZRXw8LW816bbR9iJ/n9SyVPolzV3vTC88q3I10ogchmoOOp8isz2arm5d7g6q3MoneWpJ44j2fqkI70hSP+JyrzUp7NGuH/lq603DoMQEEAVfn2SrzhlQQ2DtueLaoQ09UuwUO~-1~-1~-1; akavpau_walgreens=1615385169~id=5536e11d24dacfa6013ca746110cbd71; bm_sv=AAFFFD3B060F48A850D34B78DBA971D1~pxtrg1JduyQdPJLdc+4gioQ0IZFY0sxN0Bb3ICLKtZc4Z04o9sOU86Dtp2FdwntDekflxX7Aub4GaCFR3Txs0r4o/1G8PQkDwSmYcP4U5io5MLag0AhgOLaaIP4sDofm9EqI07UI+NJLFYEjkxpzPyjai+yEsb10HHpOwygAOYQ='
  }
}

module.exports = {
  key: 'Wallgreens',

  fetch: () => {
    return axios.post(fetchUrl, {
      serviceId: "99",
      radius: 25,
      position: {
        latitude: 30.2603535,
        longitude: -97.7145152
      },
      appointmentAvailability: {
        startDateTime: new Date(Date.now()).toLocaleDateString("en-US")
      }
    }, config).then(data => {
      return data.response;
    })

  },

  parse: (data) => {
    console.log(data);
  }
}
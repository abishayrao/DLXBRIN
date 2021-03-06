
package com.postgresdb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  postgresDB.GeTbMeiosConhecimento
 *  01/23/2013 09:59:14
 * 
 */
public class GeTbMeiosConhecimento {

    private Integer gemeioconcid;
    private String gemeioconcod;
    private String gemeiocondescr;
    private Set<com.postgresdb.data.SiClientes> siClienteses = new HashSet<com.postgresdb.data.SiClientes>();

    public Integer getGemeioconcid() {
        return gemeioconcid;
    }

    public void setGemeioconcid(Integer gemeioconcid) {
        this.gemeioconcid = gemeioconcid;
    }

    public String getGemeioconcod() {
        return gemeioconcod;
    }

    public void setGemeioconcod(String gemeioconcod) {
        this.gemeioconcod = gemeioconcod;
    }

    public String getGemeiocondescr() {
        return gemeiocondescr;
    }

    public void setGemeiocondescr(String gemeiocondescr) {
        this.gemeiocondescr = gemeiocondescr;
    }

    public Set<com.postgresdb.data.SiClientes> getSiClienteses() {
        return siClienteses;
    }

    public void setSiClienteses(Set<com.postgresdb.data.SiClientes> siClienteses) {
        this.siClienteses = siClienteses;
    }

}


package com.saasdb.data;



/**
 *  saasDB.SiSisModDescrDet
 *  01/08/2013 14:21:13
 * 
 */
public class SiSisModDescrDet {

    private Integer simoddid;
    private SiSisModulo siSisModulo;
    private String simoddnome;
    private String simodddescrdet;

    public Integer getSimoddid() {
        return simoddid;
    }

    public void setSimoddid(Integer simoddid) {
        this.simoddid = simoddid;
    }

    public SiSisModulo getSiSisModulo() {
        return siSisModulo;
    }

    public void setSiSisModulo(SiSisModulo siSisModulo) {
        this.siSisModulo = siSisModulo;
    }

    public String getSimoddnome() {
        return simoddnome;
    }

    public void setSimoddnome(String simoddnome) {
        this.simoddnome = simoddnome;
    }

    public String getSimodddescrdet() {
        return simodddescrdet;
    }

    public void setSimodddescrdet(String simodddescrdet) {
        this.simodddescrdet = simodddescrdet;
    }

}

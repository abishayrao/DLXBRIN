
package com.testdb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  testDB.GeTbCnaeSecao
 *  03/07/2013 22:09:27
 * 
 */
public class GeTbCnaeSecao {

    private String gecnaeacod;
    private String gecnaeanome;
    private Set<com.testdb.data.GeTbCnaeDivisao> geTbCnaeDivisaos = new HashSet<com.testdb.data.GeTbCnaeDivisao>();

    public String getGecnaeacod() {
        return gecnaeacod;
    }

    public void setGecnaeacod(String gecnaeacod) {
        this.gecnaeacod = gecnaeacod;
    }

    public String getGecnaeanome() {
        return gecnaeanome;
    }

    public void setGecnaeanome(String gecnaeanome) {
        this.gecnaeanome = gecnaeanome;
    }

    public Set<com.testdb.data.GeTbCnaeDivisao> getGeTbCnaeDivisaos() {
        return geTbCnaeDivisaos;
    }

    public void setGeTbCnaeDivisaos(Set<com.testdb.data.GeTbCnaeDivisao> geTbCnaeDivisaos) {
        this.geTbCnaeDivisaos = geTbCnaeDivisaos;
    }

}

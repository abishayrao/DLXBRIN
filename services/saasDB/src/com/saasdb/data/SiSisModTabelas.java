
package com.saasdb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  saasDB.SiSisModTabelas
 *  01/08/2013 14:21:13
 * 
 */
public class SiSisModTabelas {

    private Integer sismtid;
    private SiSisModulo siSisModulo;
    private String sismtnome;
    private String sismtpublicname;
    private String sismtclasse;
    private String sismtdimens;
    private String sismtvolinicial;
    private String sismtdescricao;
    private String sismttemid;
    private String sismtdadosini;
    private String sismtclienteusa;
    private Set<com.saasdb.data.SiSisModTabCampos> siSisModTabCamposes = new HashSet<com.saasdb.data.SiSisModTabCampos>();
    private Set<com.saasdb.data.SiSisModTabIndex> siSisModTabIndexes = new HashSet<com.saasdb.data.SiSisModTabIndex>();

    public Integer getSismtid() {
        return sismtid;
    }

    public void setSismtid(Integer sismtid) {
        this.sismtid = sismtid;
    }

    public SiSisModulo getSiSisModulo() {
        return siSisModulo;
    }

    public void setSiSisModulo(SiSisModulo siSisModulo) {
        this.siSisModulo = siSisModulo;
    }

    public String getSismtnome() {
        return sismtnome;
    }

    public void setSismtnome(String sismtnome) {
        this.sismtnome = sismtnome;
    }

    public String getSismtpublicname() {
        return sismtpublicname;
    }

    public void setSismtpublicname(String sismtpublicname) {
        this.sismtpublicname = sismtpublicname;
    }

    public String getSismtclasse() {
        return sismtclasse;
    }

    public void setSismtclasse(String sismtclasse) {
        this.sismtclasse = sismtclasse;
    }

    public String getSismtdimens() {
        return sismtdimens;
    }

    public void setSismtdimens(String sismtdimens) {
        this.sismtdimens = sismtdimens;
    }

    public String getSismtvolinicial() {
        return sismtvolinicial;
    }

    public void setSismtvolinicial(String sismtvolinicial) {
        this.sismtvolinicial = sismtvolinicial;
    }

    public String getSismtdescricao() {
        return sismtdescricao;
    }

    public void setSismtdescricao(String sismtdescricao) {
        this.sismtdescricao = sismtdescricao;
    }

    public String getSismttemid() {
        return sismttemid;
    }

    public void setSismttemid(String sismttemid) {
        this.sismttemid = sismttemid;
    }

    public String getSismtdadosini() {
        return sismtdadosini;
    }

    public void setSismtdadosini(String sismtdadosini) {
        this.sismtdadosini = sismtdadosini;
    }

    public String getSismtclienteusa() {
        return sismtclienteusa;
    }

    public void setSismtclienteusa(String sismtclienteusa) {
        this.sismtclienteusa = sismtclienteusa;
    }

    public Set<com.saasdb.data.SiSisModTabCampos> getSiSisModTabCamposes() {
        return siSisModTabCamposes;
    }

    public void setSiSisModTabCamposes(Set<com.saasdb.data.SiSisModTabCampos> siSisModTabCamposes) {
        this.siSisModTabCamposes = siSisModTabCamposes;
    }

    public Set<com.saasdb.data.SiSisModTabIndex> getSiSisModTabIndexes() {
        return siSisModTabIndexes;
    }

    public void setSiSisModTabIndexes(Set<com.saasdb.data.SiSisModTabIndex> siSisModTabIndexes) {
        this.siSisModTabIndexes = siSisModTabIndexes;
    }

}

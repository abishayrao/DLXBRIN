
package com.postgresdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  postgresDB.GeTbUf
 *  01/23/2013 09:59:13
 * 
 */
public class GeTbUf {

    private Integer geufcid;
    private SiClientes siClientes;
    private String geufcod;
    private String geufnome;
    private String geufstatus;
    private Date geufinivig;
    private Date geuffimvig;
    private Set<com.postgresdb.data.GeCaEmpSocios> geCaEmpSociosesForGeempsouf = new HashSet<com.postgresdb.data.GeCaEmpSocios>();
    private Set<com.postgresdb.data.GeCaEmpDocsPf> geCaEmpDocsPfsForGeempdpfregprofuf = new HashSet<com.postgresdb.data.GeCaEmpDocsPf>();
    private Set<com.postgresdb.data.GeCaEmpEnd> geCaEmpEnds = new HashSet<com.postgresdb.data.GeCaEmpEnd>();
    private Set<com.postgresdb.data.SiCliDocsPf> siCliDocsPfs = new HashSet<com.postgresdb.data.SiCliDocsPf>();
    private Set<com.postgresdb.data.GeTbMunicipios> geTbMunicipioses = new HashSet<com.postgresdb.data.GeTbMunicipios>();
    private Set<com.postgresdb.data.GeCaEmpSocios> geCaEmpSociosesForGeempsorguf = new HashSet<com.postgresdb.data.GeCaEmpSocios>();
    private Set<com.postgresdb.data.GeCaEmpLotacao> geCaEmpLotacaos = new HashSet<com.postgresdb.data.GeCaEmpLotacao>();
    private Set<com.postgresdb.data.SiCliEnd> siCliEnds = new HashSet<com.postgresdb.data.SiCliEnd>();
    private Set<com.postgresdb.data.GeCaEmpDocsPf> geCaEmpDocsPfsForGeempdpfrguf = new HashSet<com.postgresdb.data.GeCaEmpDocsPf>();

    public Integer getGeufcid() {
        return geufcid;
    }

    public void setGeufcid(Integer geufcid) {
        this.geufcid = geufcid;
    }

    public SiClientes getSiClientes() {
        return siClientes;
    }

    public void setSiClientes(SiClientes siClientes) {
        this.siClientes = siClientes;
    }

    public String getGeufcod() {
        return geufcod;
    }

    public void setGeufcod(String geufcod) {
        this.geufcod = geufcod;
    }

    public String getGeufnome() {
        return geufnome;
    }

    public void setGeufnome(String geufnome) {
        this.geufnome = geufnome;
    }

    public String getGeufstatus() {
        return geufstatus;
    }

    public void setGeufstatus(String geufstatus) {
        this.geufstatus = geufstatus;
    }

    public Date getGeufinivig() {
        return geufinivig;
    }

    public void setGeufinivig(Date geufinivig) {
        this.geufinivig = geufinivig;
    }

    public Date getGeuffimvig() {
        return geuffimvig;
    }

    public void setGeuffimvig(Date geuffimvig) {
        this.geuffimvig = geuffimvig;
    }

    public Set<com.postgresdb.data.GeCaEmpSocios> getGeCaEmpSociosesForGeempsouf() {
        return geCaEmpSociosesForGeempsouf;
    }

    public void setGeCaEmpSociosesForGeempsouf(Set<com.postgresdb.data.GeCaEmpSocios> geCaEmpSociosesForGeempsouf) {
        this.geCaEmpSociosesForGeempsouf = geCaEmpSociosesForGeempsouf;
    }

    public Set<com.postgresdb.data.GeCaEmpDocsPf> getGeCaEmpDocsPfsForGeempdpfregprofuf() {
        return geCaEmpDocsPfsForGeempdpfregprofuf;
    }

    public void setGeCaEmpDocsPfsForGeempdpfregprofuf(Set<com.postgresdb.data.GeCaEmpDocsPf> geCaEmpDocsPfsForGeempdpfregprofuf) {
        this.geCaEmpDocsPfsForGeempdpfregprofuf = geCaEmpDocsPfsForGeempdpfregprofuf;
    }

    public Set<com.postgresdb.data.GeCaEmpEnd> getGeCaEmpEnds() {
        return geCaEmpEnds;
    }

    public void setGeCaEmpEnds(Set<com.postgresdb.data.GeCaEmpEnd> geCaEmpEnds) {
        this.geCaEmpEnds = geCaEmpEnds;
    }

    public Set<com.postgresdb.data.SiCliDocsPf> getSiCliDocsPfs() {
        return siCliDocsPfs;
    }

    public void setSiCliDocsPfs(Set<com.postgresdb.data.SiCliDocsPf> siCliDocsPfs) {
        this.siCliDocsPfs = siCliDocsPfs;
    }

    public Set<com.postgresdb.data.GeTbMunicipios> getGeTbMunicipioses() {
        return geTbMunicipioses;
    }

    public void setGeTbMunicipioses(Set<com.postgresdb.data.GeTbMunicipios> geTbMunicipioses) {
        this.geTbMunicipioses = geTbMunicipioses;
    }

    public Set<com.postgresdb.data.GeCaEmpSocios> getGeCaEmpSociosesForGeempsorguf() {
        return geCaEmpSociosesForGeempsorguf;
    }

    public void setGeCaEmpSociosesForGeempsorguf(Set<com.postgresdb.data.GeCaEmpSocios> geCaEmpSociosesForGeempsorguf) {
        this.geCaEmpSociosesForGeempsorguf = geCaEmpSociosesForGeempsorguf;
    }

    public Set<com.postgresdb.data.GeCaEmpLotacao> getGeCaEmpLotacaos() {
        return geCaEmpLotacaos;
    }

    public void setGeCaEmpLotacaos(Set<com.postgresdb.data.GeCaEmpLotacao> geCaEmpLotacaos) {
        this.geCaEmpLotacaos = geCaEmpLotacaos;
    }

    public Set<com.postgresdb.data.SiCliEnd> getSiCliEnds() {
        return siCliEnds;
    }

    public void setSiCliEnds(Set<com.postgresdb.data.SiCliEnd> siCliEnds) {
        this.siCliEnds = siCliEnds;
    }

    public Set<com.postgresdb.data.GeCaEmpDocsPf> getGeCaEmpDocsPfsForGeempdpfrguf() {
        return geCaEmpDocsPfsForGeempdpfrguf;
    }

    public void setGeCaEmpDocsPfsForGeempdpfrguf(Set<com.postgresdb.data.GeCaEmpDocsPf> geCaEmpDocsPfsForGeempdpfrguf) {
        this.geCaEmpDocsPfsForGeempdpfrguf = geCaEmpDocsPfsForGeempdpfrguf;
    }

}